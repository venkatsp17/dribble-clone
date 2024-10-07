/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'; 
import { render, screen } from '@testing-library/react';
import { UploadCard, Placeholder } from './index';

describe('UploadCard Component', () => {
  test('renders UploadCard with title, description, and button', () => {
    render(<UploadCard />);
    
    const titleElement = screen.getByTestId("title-UploadCard");
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByTestId("description-UploadCard");
    expect(descriptionElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Upload your first shot/i });
    expect(buttonElement).toBeInTheDocument();
    
    expect(buttonElement).toHaveClass('bg-black');
  });
});

describe('Placeholder Component', () => {
  test('renders Placeholder with correct styles', () => {
    render(<Placeholder />);
    
    const placeholderElement = screen.getByTestId('presentation');
    expect(placeholderElement).toBeInTheDocument();

    expect(placeholderElement).toHaveClass('w-full h-64 bg-gray-200 rounded-lg animate-pulse');
  });
});
