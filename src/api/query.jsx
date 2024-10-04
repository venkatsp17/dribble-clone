import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from './config';
import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchProfiles = async () => {
  const response = await fetch(`${BASE_URL}/profiles`);    
  if (!response.ok) {
    throw new Error('Error fetching profiles');
  }
  return response.json();
};

const fetchItems = async () => {
  const response = await fetch(`${BASE_URL}/items`); 
  if (!response.ok) {
    throw new Error('Error fetching items');
  }
  return response.json();
};

const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`); 
  if (!response.ok) {
    throw new Error('Error fetching categories');
  }
  return response.json();
};

export const loginUser = createAsyncThunk('auth/loginUser', async (userCredentials, { rejectWithValue }) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    });

    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
    }

    const data = await response.json();
    localStorage.setItem("user", btoa(JSON.stringify(data)))
    return data; 
  } catch (error) {
    return rejectWithValue(error.message); 
  }
});

export const useProfiles = () => {
    return useQuery({
      queryKey: ['profiles'],
      queryFn: fetchProfiles,
      staleTime: 1000 * 60 * 5, 
    });
  };
  

  export const useItems = () => {
    return useQuery({
      queryKey: ['items'],
      queryFn: fetchItems,
      staleTime: 1000 * 60 * 5, 
    });
  };
  

  export const useCategories = () => {
    return useQuery({
      queryKey: ['categories'],
      queryFn: fetchCategories,
      staleTime: 1000 * 60 * 5, 
    });
  };
