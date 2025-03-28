'use client'

import { useParams } from 'next/navigation'

export default function Page({ id }) {
  return {
    paths: [
      {
        params: { id: 1 },
      },
      {
        params: { id: 2 },
      },
    ],
    fallback: false,
  }
}
