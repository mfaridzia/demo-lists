function addSchema (area_option, size) {
  return {
    Komoditas: {
      type: 'text',
      placeholder: 'Komoditas',
      required: true
    },
    Harga: {
      type: 'currency',
      placeholder: 'Harga',
      required: true
    },
    Ukuran: {
      type: 'select',
      required: true,
      placeholder: 'Pilih Ukuran',
      options: size || []
    },
    Daerah: {
      type: 'select',
      required: true,
      placeholder: 'Pilih Daerah',
      options: area_option || []
    },
    Tanggal: {
      type: 'date',
      placeholder: 'Tanggal',
      format: 'dd MMMM yyyy',
      required: true
    },
    Simpan: {
      type: 'submit'
    }
  }
}

export default addSchema;