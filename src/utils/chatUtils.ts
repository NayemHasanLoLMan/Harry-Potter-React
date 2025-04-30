import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';

// The API URL for your FastAPI backend
const API_URL = 'http://127.0.0.1:8000/api/chat';

// Send message to the API and get the response
export const sendMessageToApi = async (message: string, sessionId: string): Promise<string> => {
  try {
    const response = await axios.post(API_URL, {
      message: message,
      session_id: sessionId,
    });
    return response.data.response;  // Returning the bot's response
  } catch (error) {
    console.error('Error sending message to API:', error);
    return "Sorry, there was an issue contacting the server.";
  }
};

// Get stored messages from local storage
export const getStoredMessages = (): Message[] => {
  const stored = localStorage.getItem('chatMessages');
  return stored ? JSON.parse(stored) : [];
};

// Store messages in local storage
export const storeMessages = (messages: Message[]): void => {
  localStorage.setItem('chatMessages', JSON.stringify(messages));
};

// Get the session ID from local storage or generate a new one
export const getSessionId = (): string => {
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = uuidv4();  // Generate a new session ID if none exists
    localStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

// Clear chat history from local storage
export const clearChatHistory = (): boolean => {
  try {
    localStorage.removeItem('chatMessages');
    localStorage.removeItem('sessionId');
    return true;
  } catch (error) {
    console.error('Error clearing chat history:', error);
    return false;
  }
};
