import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from "components/Form";
import addSchema from "schema/add"; 
import useSize from "hooks/useSize";
import useArea from "hooks/useArea";
import useAddList from "hooks/useAddList";

function AddData () {
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
        history.push("/");
      },
      onError: (error) => {
        console.log(error);
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
    <div className="form_wrapper">
      <Form 
        model={addSchema(transformSize, transformArea)}
        onSubmit={handleOnSubmit}
      />
    </div>
  )
}

export default AddData;