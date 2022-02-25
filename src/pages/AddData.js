import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from "components/Form";
import addSchema from "schema/add"; 
import useOptions from "hooks/useSizeArea";
import useAddList from "hooks/useAddList";
import toast from "utils/toast";

function AddData () {
  const history = useHistory();
  const { size, area, isLoadingSize, isLoadingArea } = useOptions();
  const mutation = useAddList();

  const handleOnSubmit = (params) => {
    const optionArea = params.Daerah.value.split(",");
    const payload = {
      uuid: uuidv4(),
      komoditas: params.Komoditas,
      area_provinsi: optionArea[0],
      area_kota: optionArea[1],
      size: params.Ukuran.value,
      price: params.Harga,
      tgl_parsed: params.Tanggal,
      timestamp: new Date().getTime(), 
    };    

    mutation.mutate(payload, {
      onSuccess: () => {
        toast(true, "Berhasil menambahkan komoditas");
        history.push("/");
      },
      onError: () => {
        toast(true, "Gagal menambahkan komoditas");
        history.push("/");
      }
    });
  }

  if (isLoadingSize || isLoadingArea) return "Loading....";

  const transformSize = size?.map(item => ({ value: item.size, label: item.size }));
  const transformArea = area?.map(item => ({
    value: item.province + ', ' + item.city,
    label: item.province + ', ' + item.city
  }));

  return (
    <div className="">
      <Form 
        model={addSchema(transformSize, transformArea)}
        onSubmit={handleOnSubmit}
      />
    </div>
  )
}

export default AddData;