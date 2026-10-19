# Image optimization commands

These commands optimize PNG files in place with `oxipng`. The recommended default is lossless and keeps metadata that can affect how an image is displayed.

## Preview savings without changing files

```sh
oxipng -o 4 --strip safe --dry-run static/images/feature.png
```

## Optimize one image

```sh
oxipng -o 4 --strip safe static/images/feature.png
```

## Optimize every PNG directly inside one folder

```sh
oxipng -o 4 --strip safe static/images/*.png
```

This only processes PNGs directly in `static/images`; it does not process nested folders.

## Optimize every PNG recursively

```sh
oxipng -o 4 --strip safe --recursive static/images
```

## Write an optimized copy instead of replacing the source

```sh
oxipng -o 4 --strip safe --out /tmp/feature.optimized.png static/images/feature.png
```

## Use maximum compression

```sh
oxipng -o max --zopfli --strip safe static/images/feature.png
```

Maximum compression can be much slower and usually has diminishing returns. Start with `-o 4` for routine work.

## Notes

- `oxipng` only rewrites a file when the optimized result is smaller.
- `--strip safe` removes nonessential metadata while retaining chunks that affect display.
- Do not add `--alpha` when strict losslessness is required; it changes RGB values hidden behind fully transparent pixels and is only visually lossless.
- Review the changed files and their sizes with `git diff --stat` before committing.
