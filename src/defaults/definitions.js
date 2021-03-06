'use strict';

const lambdaNamespace = 'AWS/Lambda';

module.exports = {
  functionInvocations: {
    namespace: lambdaNamespace,
    metric: 'Invocations',
    threshold: 100,
    statistic: 'Sum',
    period: 60,
    evaluationPeriods: 1,
    comparisonOperator: 'GreaterThanThreshold',
  },
  functionErrors: {
    namespace: lambdaNamespace,
    metric: 'Errors',
    threshold: 10,
    statistic: 'Sum',
    period: 60,
    evaluationPeriods: 1,
    comparisonOperator: 'GreaterThanThreshold',
  },
  functionDuration: {
    namespace: lambdaNamespace,
    metric: 'Duration',
    threshold: 500,
    statistic: 'Average',
    period: 60,
    evaluationPeriods: 1,
    comparisonOperator: 'GreaterThanThreshold',
  },
  functionThrottles: {
    namespace: lambdaNamespace,
    metric: 'Throttles',
    threshold: 50,
    statistic: 'Sum',
    period: 60,
    evaluationPeriods: 1,
    comparisonOperator: 'GreaterThanThreshold',
  }
};