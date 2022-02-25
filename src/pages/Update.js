import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from "components/Form";
import updateSchema from "schema/update"; 
import useOptions from "hooks/useSizeArea";
import useGetListById from "hooks/useGetListById";
import useUpdateList from "hooks/useUpdateList";
import toast from "utils/toast";
import { transformSize, transformArea } from "utils/transformOptions";

function Update () {
  const history = useHistory();
  const { uuid } = useParams();
  console.log("UUD", uuid);
  const { size, area, isLoadingSize, isLoadingArea } = useOptions();
  const { data: selectedData, isLoading: isLoadingSelectedData } = useGetListById(uuid);
  const mutation = useUpdateList();

  const handleOnSubmit = (params) => {
    const optionArea = params.Daerah.value.split(",");
    
    const payload = {
      komoditas: params.Komoditas,
      area_provinsi: optionArea[0],
      area_kota: optionArea[1],
      size: params.Ukuran.value,
      price: params.Harga,
      tgl_parsed: params.Tanggal,
      timestamp: new Date().getTime(), 
    };    

    mutation.mutate({ uuid, payload }, {
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

  if (isLoadingSize || isLoadingArea || isLoadingSelectedData) {
    return "Loading....";
  }

  return (
    <div className="">
      <Form 
        model={updateSchema(transformSize(size), transformArea(area), selectedData[0])}
        onSubmit={handleOnSubmit}
      />
    </div>
  )
}

export default Update;