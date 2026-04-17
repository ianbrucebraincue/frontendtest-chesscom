import { test, expect } from '@playwright/test'

const viewPorts = [
  { width: 375, height: 667 }, // small mobile
  { width: 768, height: 1024 }, // tablet
  { width: 1200, height: 800 }, // desktop
  { width: 1920, height: 1080 }, // large desktop
]

for (const viewport of viewPorts) {
  test(`chessboard fits viewport ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.goto('/')

    const board = page.locator('.chessboard__grid')

    await expect(board).toBeVisible()
    await expect(board).toHaveCSS('min-width', '264px')
    await expect(board).toHaveCSS('min-height', '264px')

    const box = await board.boundingBox()

    if (!box) {
      throw new Error('Bounding box is null')
    }

    expect(box.width).toBeLessThanOrEqual(viewport.width)
    expect(box.height).toBeLessThanOrEqual(viewport.height)
    expect(box.width).toBeGreaterThanOrEqual(264)
    expect(box.height).toBeGreaterThanOrEqual(264)
  })
}

test('chessboard width is larger than screen when screen is smaller than 264px', async ({
  page,
}) => {
  await page.setViewportSize({ width: 263, height: 667 })
  await page.goto('/')
  const board = page.locator('.chessboard__grid')
  await expect(board).toBeVisible()
  const box = await board.boundingBox()

  if (!box) {
    throw new Error('Bounding box is null')
  }

  expect(box.width).toBeGreaterThan(263)
  expect(box.height).toBeGreaterThan(263)
})
