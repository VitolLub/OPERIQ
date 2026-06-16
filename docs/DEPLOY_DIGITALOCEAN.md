# Deploy Operiq to a DigitalOcean Droplet

This guide deploys Operiq as a Next.js production app on an Ubuntu Droplet using Node.js, PM2, and Nginx.

## Recommended Droplet

- Image: Ubuntu 24.04 LTS
- Size: Basic Premium, 1 vCPU / 1 GB RAM for a demo, 2 GB RAM for a safer production baseline
- Region: closest to your users
- Authentication: SSH key
- Options: monitoring enabled, backups enabled for production

## 1. Connect to the server

```bash
ssh root@YOUR_DROPLET_IP
```

## 2. Create an app user

```bash
adduser deploy
usermod -aG sudo deploy
rsync --archive --chown=deploy:deploy ~/.ssh /home/deploy
su - deploy
```

## 3. Install system dependencies

```bash
sudo apt update
sudo apt install -y nginx git curl
```

Install Node.js 20 LTS:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

Install PM2:

```bash
sudo npm install -g pm2
```

## 4. Clone and build Operiq

```bash
cd /var/www
sudo mkdir -p operiq
sudo chown deploy:deploy operiq
git clone YOUR_REPOSITORY_URL operiq
cd operiq
mkdir -p data
cp .env.example .env
openssl rand -base64 33
```

Edit `.env` before installing dependencies:

```bash
nano .env
```

Use these values, replacing the Google values and the secret:

```bash
AUTH_SECRET="PASTE_OPENSSL_VALUE_HERE"
AUTH_TRUST_HOST=true
AUTH_GOOGLE_ID="YOUR_GOOGLE_CLIENT_ID"
AUTH_GOOGLE_SECRET="YOUR_GOOGLE_CLIENT_SECRET"
DATABASE_URL="file:/var/www/operiq/data/operiq.db"
```

In Google Cloud Console, configure the OAuth consent screen and add this authorized redirect URI:

```text
http://YOUR_DOMAIN_OR_IP/api/auth/callback/google
```

After DNS and HTTPS are configured, add the HTTPS callback too:

```text
https://YOUR_DOMAIN/api/auth/callback/google
```

Then install, migrate, and build:

```bash
npm install
npm run db:deploy
npm run build
```

Start the app:

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup systemd
```

Run the command printed by `pm2 startup systemd`.

## 5. Configure Nginx

Create a site config:

```bash
sudo nano /etc/nginx/sites-available/operiq
```

Paste this config, replacing `YOUR_DOMAIN_OR_IP`:

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_IP;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/operiq /etc/nginx/sites-enabled/operiq
sudo nginx -t
sudo systemctl reload nginx
```

Open:

```text
http://YOUR_DOMAIN_OR_IP
```

## 6. Add HTTPS after DNS is ready

Point your domain's `A` record to the Droplet IP first. Then install Certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN
```

## 7. Update deployment

```bash
cd /var/www/operiq
git pull
npm install
npm run db:deploy
npm run build
pm2 restart operiq
```

## Useful checks

```bash
pm2 status
pm2 logs operiq
sudo systemctl status nginx
sudo nginx -t
```
