// Modules
import { useCallback } from 'react';
import axios from 'axios';
// import { Message } from '@owl-systems/ui-kit';

// Local Imports
// import { useExperienceStore } from '../../stores';

// Own Imports

// Config
const API_BASE_URL =
  'https://sellia-files.s3.us-east-2.amazonaws.com/challenge/';

/**
 * Conversations API Handler
 */
export const useConversationAPI = () => {
  /**
   * Get Clients Data from API
   */
  const getConversation = useCallback(async (_id: string) => {
    try {
      const conversation = await axios.get(API_BASE_URL + _id + '.json');
      console.log(conversation);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Hook Exports
  return {
    getConversation,
  };
};
