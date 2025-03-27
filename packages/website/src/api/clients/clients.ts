// Modules
import { useCallback } from 'react';
import axios from 'axios';

// Local Imports
import { Client } from '.';

// Config
const CLIENTS_ENDPOINT_URL =
  'https://sellia-files.s3.us-east-2.amazonaws.com/challenge/clients.json';

/**
 * Clients API Handler
 */
export const useClientsAPI = () => {
  /**
   * Get Clients Data from API
   */
  const getClients: () => Promise<Client[]> = useCallback(async () => {
    try {
      const { data } = await axios.get(CLIENTS_ENDPOINT_URL);
      return data;
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Hook Exports
  return {
    getClients,
  };
};
