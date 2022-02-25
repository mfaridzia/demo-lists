function updateSchema (option_size, option_area, updateValue) {
  const daerah = `${updateValue.area_provinsi}, ${updateValue.area_kota}`;
  const tanggal = updateValue.tgl_parsed ? new Date(updateValue.tgl_parsed) : '';

  return {
    Komoditas: {
      type: 'text',
      placeholder: 'Komoditas',
      required: true,
      defaultValue: updateValue.komoditas
    },
    Harga: {
      type: 'currency',
      placeholder: 'Harga',
      required: true,
      defaultValue: updateValue.price
    },
    Ukuran: {
      type: 'select',
      required: true,
      placeholder: 'Pilih Ukuran',
      options: option_size || [],
      defaultValue: updateValue.size
    },
    Daerah: {
      type: 'select',
      required: true,
      placeholder: 'Pilih Daerah',
      options: option_area || [],
      defaultValue: daerah
    },
    Tanggal: {
      type: 'date',
      placeholder: 'Tanggal',
      format: 'dd MMMM yyyy',
      required: true,
      defaultValue: tanggal
    },
    Update: {
      type: 'submit'
    }
  }
}

export default updateSchema;