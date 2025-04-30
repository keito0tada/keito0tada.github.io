import React from 'react';
import { Canvas } from '@react-three/fiber';
import { redirect } from 'next/navigation';

export default async function Page() {
  redirect('/about');
}
