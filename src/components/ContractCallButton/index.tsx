/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { SecondaryButton } from '@/components/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const CONTRACT_ADDRESS = '0x02fb56db1ab7b0db13bd27e9754dbeebbea4e461';
const ABI = [
  'function totalSupply() view returns (uint256)',
  'function decimals() view returns (uint8)',
];
const RPC_URL = 'https://eth.llamarpc.com';

const ContractCallButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [totalSupply, setTotalSupply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setOpen(true);
    setLoading(true);
    setError(null);
    setTotalSupply(null);

    try {
      const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const [supply, decimals]: [ethers.BigNumber, number] = await Promise.all([contract.totalSupply(),contract.decimals(),]);
      setTotalSupply(ethers.utils.formatUnits(supply, decimals));
    } catch (err) {
      setError('Failed to fetch total supply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SecondaryButton
        onClick={handleClick}
        className='custom-btn-wrap'
      >
        Contract call
      </SecondaryButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#0d0d1a',
            border: '1px solid #333',
            borderRadius: '12px',
            padding: '32px',
            minWidth: '320px',
            color: 'white',
            outline: 'none',
          }}
        >
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>
            Contract Info
          </h3>

          <p style={{ color: '#aaa', fontSize: '13px', marginBottom: '16px', wordBreak: 'break-all' }}>
            {CONTRACT_ADDRESS}
          </p>

          {loading && (
            <p style={{ color: '#888' }}>Fetching total supply...</p>
          )}

          {error && (
            <p style={{ color: '#ff4d4f' }}>{error}</p>
          )}

          {totalSupply && !loading && (
            <p>
              <span style={{ color: '#aaa' }}>Total Supply: </span>
              <strong>{Number(totalSupply).toLocaleString()} tokens</strong>
            </p>
          )}

          <button
            onClick={() => setOpen(false)}
            style={{
              marginTop: '24px',
              background: 'transparent',
              border: '1px solid #555',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'block',
            }}
          >
            Close
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default ContractCallButton;