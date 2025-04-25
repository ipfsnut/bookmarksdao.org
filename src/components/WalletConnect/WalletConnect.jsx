import React, { useState, useEffect } from 'react';
import './WalletConnect.css';

const WalletConnect = ({ onWalletChange, currentAddress }) => {
  const [walletAddress, setWalletAddress] = useState(currentAddress || null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  
  // Update parent component when wallet changes
  useEffect(() => {
    if (walletAddress !== currentAddress) {
      onWalletChange(walletAddress);
    }
  }, [walletAddress, onWalletChange, currentAddress]);
  
  // Check if wallet is already connected
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ 
            method: 'eth_accounts' 
          });
          
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (err) {
          console.error('Error checking wallet connection:', err);
        }
      }
    };
    
    checkWalletConnection();
    
    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
    
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);
  
  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // User disconnected their wallet
      setWalletAddress(null);
      setError('Wallet disconnected. Please reconnect to continue.');
    } else {
      // User switched accounts
      setWalletAddress(accounts[0]);
      setError(null);
    }
  };
  
  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('No Ethereum wallet detected. Please install MetaMask or another web3 wallet.');
      return;
    }
    
    setIsConnecting(true);
    setError(null);
    
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error('Error connecting wallet:', err);
      
      if (err.code === 4001) {
        // User rejected the connection request
        setError('You rejected the connection request. Please connect your wallet to continue.');
      } else {
        setError('Error connecting to wallet. Please try again.');
      }
    } finally {
      setIsConnecting(false);
    }
  };
  
  const disconnectWallet = () => {
    setWalletAddress(null);
  };
  
  const formatWalletAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  return (
    <div className="wallet-connect">
      {walletAddress ? (
        <div className="wallet-info">
          <span className="wallet-address">{formatWalletAddress(walletAddress)}</span>
          <button 
            type="button"
            onClick={disconnectWallet} 
            className="button secondary small"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={connectWallet}
          className="button secondary"
          disabled={isConnecting}
        >
          {isConnecting ? (
            <span>
              <i className="fas fa-spinner fa-spin"></i> Connecting...
            </span>
          ) : (
            <span>
              <i className="fas fa-wallet"></i> Connect Wallet
            </span>
          )}
        </button>
      )}
      
      {error && (
        <div className="wallet-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default WalletConnect;