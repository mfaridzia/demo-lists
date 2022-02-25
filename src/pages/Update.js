import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from "components/Form";
import updateSchema from "schema/update"; 
import useSize from "hooks/useSize";
import useArea from "hooks/useArea";
import useAddList from "hooks/useAddList";
import toast from "utils/toast";
import { transformSize, transformArea } from "utils/transformOptions";

function Update () {
  const history = useHistory();
  const { data: size, isLoading: isLoadingSize } = useSize();
  const { data: area, isLoading: isLoadingArea } = useArea();
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
        toast(true, "Berhasil memperbarui komoditas");
        history.push("/");
      },
      onError: () => {
        toast(true, "Gagal memperbarui komoditas");
        history.push("/");
      }
    });
  }

  if (isLoadingSize || isLoadingArea) return "Loading....";

  return (
    <div className="">
      <Form 
        model={updateSchema(transformSize, transformArea)}
        onSubmit={handleOnSubmit}
      />
    </div>
  )
}

export default Update;