export function formatToRupiah(text) {
    if (!text || isNaN(text)) {
      return 'Wrong Format';
    }

    const price = Number(text);
    const formattedPrice = `Rp ${price.toLocaleString('id-ID', { minimumFractionDigits: 0 })},00`;

  
    return formattedPrice;
  }