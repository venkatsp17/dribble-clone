import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from './config';


const fetchProfiles = async () => {
  const response = await fetch(`${BASE_URL}/profiles`); 
  console.log(response.json());      
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
