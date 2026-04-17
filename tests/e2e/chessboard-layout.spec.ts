import { test, expect } from '@playwright/test'

test('chessboard fills viewport and respects minimum size', async ({ page }) => {
  await page.setViewportSize({ width: 1200, height: 800 })

  await page.goto('/')

  const board = page.locator('.chessboard__grid')

  await expect(board).toBeVisible()
  await expect(board).toHaveCSS('min-width', '264px')
  await expect(board).toHaveCSS('min-height', '264px')

  const box = await board.boundingBox()

  if (!box) {
    throw new Error('Bounding box is null')
  }

  // from here, TS knows box is NOT null
  expect(box.width).toBeLessThanOrEqual(1200)
  expect(box.height).toBeLessThanOrEqual(800)
  expect(box.width).toBeGreaterThanOrEqual(264)
  expect(box.height).toBeGreaterThanOrEqual(264)
})
