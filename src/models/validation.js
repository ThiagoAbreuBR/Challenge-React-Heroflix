export function simpleValidation(input) {
    return input.length <= 2
        ? "Preencha com mais de 3 caracteres"
        : null;
}

export function validateWallpaper(wallpaper) {
    return /^\S+\.(?:png|jpe?g|gif|bmp|tiff|ico|webp|svg|apng|avif|jfif|pjpeg|pjp|x-icon|heif|bat|bpg|djvu|wmf)$/.test(wallpaper)
        ? null
        : "Verique se há extensão na URL da imagem";
}

export function validateTrailer(trailer) {
    return /^https?:\/\/(?:www\.)?youtube\.com\/embed\/[A-Za-z0-9_-]+(\?.*)?$/.test(trailer)
        ? null
        : "Verique se há a presença de embed na URL";
}

export function validateColors(colors) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colors)
        ? null
        : "Escolha uma cor";
}