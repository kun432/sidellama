import React from 'react';
import { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { useConfig } from './ConfigContext';
import toast from 'react-hot-toast';

export const ConnectGemini = () => {
  const { config, updateConfig } = useConfig();
  const [apiKey, setApiKey] = useState(config?.geminiApiKey);
  const onConnect = () => {
    fetch(GEMINI_URL, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(res => res.json())
      .then(data => {
        if (data?.error) {
          toast.error(`${data?.error?.message}`);
          updateConfig({ geminiError: data?.error?.message, geminiConnected: false });
        } else {
          toast.success('connected to Gemini');
          updateConfig({ geminiApiKey: apiKey, geminiConnected: true, geminiError: undefined });
        }
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const disabled = config?.geminiApiKey === apiKey;
  const isConnected = config?.geminiConnected && config?.geminiApiKey === apiKey;

  return (
    <Box display="flex" mb={4} ml={4} mr={4}>
      <Input
        _focus={{ borderColor: 'var(--text)', boxShadow: 'none !important' }}
        _hover={{ borderColor: !disabled && 'var(--text)', boxShadow: !disabled && 'none !important' }}
        autoComplete="off"
        border="2px"
        borderColor="var(--text)"
        borderRadius={16}
        color="var(--text)"
        fontSize="md"
        fontStyle="bold"
        fontWeight={600}
        id="user-input"
        mr={4}
        placeholder="GEMINI_API_KEY"
        size="sm"
        type={!visibleApiKeys ? 'password' : undefined}
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
      />
      {!isConnected && (
        <Button
          _hover={{ background: 'var(--active)', border: '2px solid var(--text)' }}
          background="var(--active)"
          border="2px solid var(--text)"
          borderRadius={16}
          color="var(--text)"
          disabled={disabled}
          size="sm"
          onClick={onConnect}
        >
          connect
        </Button>
      )}
    </Box>
  );
};