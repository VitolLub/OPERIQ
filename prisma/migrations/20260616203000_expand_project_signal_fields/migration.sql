-- AlterTable
ALTER TABLE "Project" ADD COLUMN "businessOwner" TEXT;
ALTER TABLE "Project" ADD COLUMN "reviewCadence" TEXT NOT NULL DEFAULT 'weekly';
ALTER TABLE "Project" ADD COLUMN "keyDecision" TEXT;
ALTER TABLE "Project" ADD COLUMN "riskHypothesis" TEXT;
ALTER TABLE "Project" ADD COLUMN "successCondition" TEXT;
