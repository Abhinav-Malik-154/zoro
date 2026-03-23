/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { SecondaryButton } from '@/components/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const CONTRACT_ADDRESS = '0x02fb56db1ab7b0db13bd27e9754dbeebbea4e461';
const ABI = ['function totalSupply() view returns (uint256)', 'function decimals() view returns (uint8)'];

const ContractCallButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [supply, setSupply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSupply = async () => {
    setOpen(true);
    setLoading(true);
    setSupply(null);
    setError(null);
    try {
      const provider = new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com');
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const [total, decimals] = await Promise.all([contract.totalSupply(), contract.decimals()]);
      setSupply(ethers.utils.formatUnits(total, decimals));
    } catch {
      setError('Could not fetch supply. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SecondaryButton onClick={fetchSupply} className='custom-btn-wrap'>
        Contract call
      </SecondaryButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#0d0d1a', border: '1px solid #333',
          borderRadius: '12px', p: '32px', minWidth: 320,
          color: 'white', outline: 'none',
        }}>
          <h3 style={{ marginBottom: 12, fontSize: 18 }}>Contract Info</h3>
          <p style={{ color: '#aaa', fontSize: 12, marginBottom: 16, wordBreak: 'break-all' }}>
            {CONTRACT_ADDRESS}
          </p>

          {loading && <p style={{ color: '#888' }}>Fetching...</p>}
          {error && <p style={{ color: '#ff4d4f' }}>{error}</p>}
          {supply && !loading && (
            <p>
              <span style={{ color: '#aaa' }}>Total Supply: </span>
              <strong>{Number(supply).toLocaleString()} ZORO</strong>
            </p>
          )}

          <SecondaryButton onClick={() => setOpen(false)} style={{ marginTop: 24 }}>
            Close
          </SecondaryButton>
        </Box>
      </Modal>
    </>
  );
};

export default ContractCallButton;