import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch' // Required for CodeGrade

// Mock CSS Modules
vi.mock('*.module.css', () => ({
  default: {
    productCard: 'productCard',
    outOfStockClass: 'outOfStockClass',
    productName: 'productName',
    productPrice: 'productPrice',
    productAvailability: 'productAvailability',
    inStock: 'inStock',
    outOfStock: 'outOfStock',
    removeButton: 'removeButton'
  }
}))

afterEach(() => {
  cleanup()
})
