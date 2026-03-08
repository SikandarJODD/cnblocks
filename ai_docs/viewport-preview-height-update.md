# Viewport Preview Height Update

- **Date:** March 9, 2026

> **Important:** Hero previews use a taller fixed iframe viewport now.

## Problem

- Hero blocks were isolated in iframe preview mode.
- The previous height, `720px`, felt a bit tight for viewing the full hero area.
- Users had less visible space to inspect the section before scrolling.

## Solution

1. Updated hero preview height from `720` to `780`.
2. Kept header preview height unchanged at `640`.
3. Applied the change to:
   - base hero blocks
   - Mist hero blocks
   - Veil hero blocks

## Result

- Better first-look visibility for hero sections.
- Scroll-based preview behavior stays intact.
