import { useHistory, useParams } from "react-router-dom";
import Form from "components/Form";
import Header from "components/Header";
import updateSchema from "schema/update"; 
import useOptions from "hooks/useSizeArea";
import useGetListById from "hooks/useGetListById";
import useUpdateList from "hooks/useUpdateList";
import useDeleteList from "hooks/useDeleteList";
import toast from "utils/toast";
import { transformSize, transformArea } from "utils/transformOptions";
import Spinner from "components/Spinner";

function Update () {
  const history = useHistory();
  const { uuid } = useParams();
  const { size, area, isLoadingSize, isLoadingArea } = useOptions();
  const { data: selectedData, isLoading: isLoadingSelectedData } = useGetListById(uuid);
  const mutation = useUpdateList();
  const deleteMutation = useDeleteList();

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

  const handleDeleteList = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        toast(true, "Berhasil manghapus komoditas");
        history.push("/");
      },
      onError: () => {
        toast(true, "Gagal menghapus komoditas");
        history.push("/");
      }
    });
  }

  if (isLoadingSize || isLoadingArea || isLoadingSelectedData) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="update_form-wrapper">
        <div className="update_box-title">
          <h4 className="update_form-title"> 
            Ubah Data Komoditas 
          </h4>
          <button 
            className="update_btn-delete"
            onClick={() => handleDeleteList(uuid)}
          > 
            Hapus Data 
          </button>
        </div>
        <Form 
          model={updateSchema(transformSize(size), transformArea(area), selectedData[0])}
          onSubmit={handleOnSubmit}
        />
      </div>
    </>
  )
}

export default Update;