export function formatToRupiah(text) {
    if (!text || isNaN(text)) {
      return 'Kesalahan Format';
    }

    const price = Number(text);
    const formattedPrice = `Rp ${price.toLocaleString('id-ID', { minimumFractionDigits: 0 })}`;

  
    return formattedPrice;
  }