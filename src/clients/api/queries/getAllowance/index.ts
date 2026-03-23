import BigNumber from 'bignumber.js';

export interface GetAllowanceInput {
  tokenContract: any;
  accountAddress: string;
  spenderAddress: string;
  isValidAllowance?: boolean;
}

export type GetAllowanceOutput = {
  allowanceWei: BigNumber;
};

const getAllowance = async ({
  tokenContract,
  accountAddress,
  spenderAddress,
}: GetAllowanceInput): Promise<GetAllowanceOutput> => {
  const res = await tokenContract.allowance(accountAddress, spenderAddress);

  return {
    allowanceWei: new BigNumber(res.toString()),
  };
};

export default getAllowance;
