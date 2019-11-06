import { MILLION, THOUSAND } from "../../constants";

const stockDetails = {
  id: "3937",
  annualReports: [
    {
      currency: "USD",
      year: 2018,
      revenue: 53762000000,
      numberOfEmployees: 105 * THOUSAND,
      numberOfShares: 281 * MILLION,
      earningsBeforeInterestAndTax: 5838 * MILLION,
      netEarnings: 5046000000,
      totalAssets: 44876000000,
      totalDebt: 14104000000
    },
    {
      currency: "USD",
      year: 2017,
      revenue: 49960 * MILLION,
      numberOfEmployees: 100 * THOUSAND,
      numberOfShares: 284 * MILLION,
      earningsBeforeInterestAndTax: 5246 * MILLION,
      netEarnings: 1963 * MILLION,
      totalAssets: 46620 * MILLION,
      totalDebt: 14263 * MILLION
    }
  ]
};

export default stockDetails;
