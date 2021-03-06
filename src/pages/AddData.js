import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from "components/Form";
import Header from "components/Header";
import Spinner from "components/Spinner";
import addSchema from "schema/add"; 
import useOptions from "hooks/useSizeArea";
import useAddList from "hooks/useAddList";
import { transformSize, transformArea } from "utils/transformOptions";
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

  if (isLoadingSize || isLoadingArea) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="add_form-wrapper">
        <div className="add_box-title">
          <h4 className="add_form-title"> 
            Tambah Data Komoditas 
          </h4>
        </div>

        <Form 
          model={addSchema(transformSize(size), transformArea(area))}
          onSubmit={handleOnSubmit}
        />
      </div>
     
    </>
  )
}

export default AddData;