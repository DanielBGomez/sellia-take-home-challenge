// Modules
import { useCallback } from 'react';
import axios from 'axios';
import { Message } from '@owl-systems/ui-kit';

// Local Imports
import { useExperienceStore } from '../../stores';

// Own Imports
import { Conversation, RawMessage } from '.';

// Config
const API_BASE_URL =
  'https://sellia-files.s3.us-east-2.amazonaws.com/challenge/';

/**
 * Conversations API Handler
 */
export const useConversationAPI = () => {
  // Stores
  const conversations = useExperienceStore((state) => state.conversations);

  /**
   * Get Clients Data from API
   */
  const getConversation = useCallback(async (_id: string) => {
    const { data: conversation } = await axios.get(
      API_BASE_URL + _id + '.json',
    );
    return {
      id: _id,
      messages: (conversation as RawMessage[]).map(
        (rawMessage) => rawMessage.message,
      ),
    };
  }, []);

  const getConversationByClient: (clientId: string) => Conversation = (
    clientId,
  ) => conversations[clientId] || { id: clientId, messages: [] };
  const getConversationLastMessage: (clientId: string) => Message = (
    clientId,
  ) => {
    const conversationMessages = getConversationByClient(clientId).messages;
    return conversationMessages[conversationMessages.length - 1] || [];
  };

  // Hook Exports
  return {
    getConversation,
    getConversationByClient,
    getConversationLastMessage,
  };
};
