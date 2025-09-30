
import { defineTable, defineDb, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    name: column.text(),
    role: column.text(),
    createdAt: column.date(),
  }
});

const Order = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    orderId: column.text(),
    userId: column.number({ optional: true, references: () => User.columns.id }),
    items: column.json(),
    subtotal: column.number(),
    taxes: column.number(),
    shipping: column.number(),
    discount: column.number(),
    totalAmount: column.number(),
    currency: column.text(),
    status: column.text(),
    checkoutStartedAt: column.date({ optional: true }),
    paidAt: column.date({ optional: true }),
    cancelledAt: column.date({ optional: true }),
    createdAt: column.date(),
    updatedAt: column.date(),
    metadata: column.json({ optional: true }),
  }
});

const Payment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    paymentId: column.text(),
    orderId: column.number({ references: () => Order.columns.id }),
    method: column.text(),
    amount: column.number(),
    currency: column.text(),
    status: column.text(),
    attemptAt: column.date(),
    responseCode: column.text({ optional: true }),
    responseMessage: column.text({ optional: true }),
    rawResponse: column.json({ optional: true }),
    idempotencyKey: column.text({ optional: true }),
    attemptNumber: column.number(),
  }
});

const TransactionHistory = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    timestamp: column.date(),
    orderId: column.number({ references: () => Order.columns.id }),
    paymentId: column.number({ optional: true, references: () => Payment.columns.id }),
    userId: column.number({ optional: true, references: () => User.columns.id }),
    method: column.text(),
    amount: column.number(),
    currency: column.text(),
    status: column.text(),
    balanceAfter: column.number({ optional: true }),
    notes: column.text({ optional: true }),
    actor: column.text(), // "system", "admin", or "user"
    metadata: column.json({ optional: true }),
  }
});

const Refund = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    refundId: column.text(),
    paymentId: column.number({ references: () => Payment.columns.id }),
    orderId: column.number({ references: () => Order.columns.id }),
    amount: column.number(),
    currency: column.text(),
    status: column.text(), // "initiated", "processing", "complete", "failed"
    initiatedBy: column.text(),
    createdAt: column.date(),
    updatedAt: column.date(),
    notes: column.text({ optional: true }),
  }
});

const Dispute = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    disputeId: column.text(),
    paymentId: column.number({ references: () => Payment.columns.id }),
    orderId: column.number({ references: () => Order.columns.id }),
    reason: column.text(),
    status: column.text(),
    evidence: column.json({ optional: true }),
    resolutionAmount: column.number({ optional: true }),
    createdAt: column.date(),
  }
});

const MockGatewayConfig = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    successRate: column.number(),
    failureRate: column.number(),
    pendingRate: column.number(),
    timeoutRate: column.number(),
    lastUpdatedBy: column.text(),
  }
});

const AuditLog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    actor: column.text(),
    action: column.text(),
    targetType: column.text(),
    targetId: column.text(),
    data: column.json({ optional: true }),
    createdAt: column.date(),
  }
});

export default defineDb({
  tables: {
    User,
    Order,
    Payment,
    TransactionHistory,
    Refund,
    Dispute,
    MockGatewayConfig,
    AuditLog,
  }
});
