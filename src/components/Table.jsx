import React from "react";
function Table() {
  const [data, setData] = React.useState([
    {
      id: 9123,
      nama: "Daffa",
      umur: 26,
      gender: "Laki-laki",
      perokok: true,
      jenis: ["sampoerna", "LA"],
    },
    {
      id: 91431,
      nama: "RS",
      umur: 28,
      gender: "Lainnya",
      perokok: false,
      jenis: "Malboro Kretek",
    },
  ]);
  function saveData(event) {
    event.preventDefault();
    const name = event.target.names.value;
    const age = event.target.email.value;
    const gender = event.target.genders.value;
    const smokers = event.target.smokers.value;
    const jenis = event.target.cek;

    let cekJenis = [];
    jenis.forEach((item) => {
      if (item.checked) {
        cekJenis.push(item.value);
      }
    });
    // const jenis =
    //   const newData = [...data];
    //   newData.push({
    //     id: Math.round(Math.random() * 9999),
    //     name,
    //     age,
    //     gender,
    //     smokers,
    //   });
    setData([
      ...data,
      {
        id: Math.round(Math.random() * 9999),
        nama: name,
        umur: age,
        gender,
        perokok: smokers, //bool
        jenis: cekJenis,
      },
    ]);
  }
  //Component
  return (
    <React.Fragment>
      <form onSubmit={saveData}>
        <div className="container-survey">
          <div className="content-container">
            <div className="forms">
              <div className="name">
                <label className="name-input" htmlFor="names">
                  Nama
                </label>
              </div>
              <div className="inputs">
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="edit-input"
                />
              </div>
            </div>
            <div className="forms">
              <div className="name">
                <label className="name-input" htmlFor="ages">
                  Umur
                </label>
              </div>
              <div className="inputs">
                <input
                  type="number"
                  name="email"
                  id="ages"
                  className="edit-input"
                />
              </div>
            </div>
            <div className="forms">
              <div className="name">
                <label className="name-input" htmlFor="genders">
                  Gender
                </label>
              </div>
              <div className="inputs">
                <div className="space-input">
                  <input type="radio" name="genders" id="man" value={"ya"} />
                  <label htmlFor="man">Laki-laki</label>
                </div>
                <div className="space-input">
                  <input
                    type="radio"
                    name="genders"
                    id="women"
                    value={"tidak"}
                  />
                  <label htmlFor="women">Perempuan</label>
                </div>
              </div>
            </div>
            <div className="forms">
              <div className="name">
                <label className="name-input" htmlFor="genders">
                  Apakah anda perokok?
                </label>
              </div>
              <div className="inputs1">
                <div className="space-input">
                  <input type="radio" name="smokers" id="ya" />
                  <label htmlFor="ya">Ya</label>
                </div>
                <div className="space-input">
                  <input type="radio" name="smokers" id="tidak" />
                  <label htmlFor="tidak">Tidak</label>
                </div>
              </div>
            </div>
            <div className="Cigaret">
              <div className="cigaret1">
                <input
                  type="checkbox"
                  name="cek"
                  id="cek1"
                  value={"Sampoerna"}
                />
                <label htmlFor="cek1">Sampoerna</label>
              </div>
              <div className="cigaret1">
                <input type="checkbox" name="cek" id="cek2" value={"Malboro"} />
                <label htmlFor="cek2">Malboro</label>
              </div>
              <div className="cigaret1">
                <input type="checkbox" name="cek" id="cek3" value={"Esse"} />
                <label htmlFor="cek3">Esse</label>
              </div>
              <div className="cigaret1">
                <input type="checkbox" name="cek" id="cek4" value={"Camel"} />
                <label htmlFor="cek4">Camel</label>
              </div>
            </div>
            <div className="button-survey">
              <button type="submit" id="btn-survey">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>gender</th>
            <th>Perokok</th>
            <th>Jenis Rokok</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {data.map((item) => {
            return (
              <tr key={"survey-" + item.id}>
                <td>{item.nama}</td>
                <td>{item.umur}</td>
                <td>{item.gender}</td>
                <td>{item.perokok ? "Ya" : "Tidak"}</td>
                <td>{item.jenis}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default Table;
