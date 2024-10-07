/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileCarousel from './index';

describe('ProfileCarousel Component', () => {
  const mockData = [
    {
      name: 'John Doe',
      role: 'Developer',
      imgSrc: 'https://via.placeholder.com/150',
      videoSrc: '',
      tags: ['JavaScript', 'React']
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      imgSrc: '',
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      tags: ['UI', 'UX']
    }
  ];

  test('renders ProfileCarousel with profiles', () => {
    render(<ProfileCarousel data={mockData} />);


    const profileElements = screen.getAllByText(/Developer|Designer/i);
    console.log(profileElements.length);
    
    expect(profileElements.length).toBe(4); 

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  test('renders profile images and videos correctly', () => {
    render(<ProfileCarousel data={mockData} />);


    const videoElement = screen.getByRole('video');
    expect(videoElement).toBeInTheDocument();
  });

  test('renders profile tags correctly', () => {
    render(<ProfileCarousel data={mockData} />);


    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('UI')).toBeInTheDocument();
    expect(screen.getByText('UX')).toBeInTheDocument();
  });

  test('renders extended profiles', () => {
    render(<ProfileCarousel data={mockData} />);
    
    const allProfileNames = screen.getAllByText(/John Doe|Jane Smith/i);
    expect(allProfileNames.length).toBe(4); 

});
});