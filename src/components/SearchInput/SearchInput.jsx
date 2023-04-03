import styles from "./SearchInput.scss";

const SearchInput = ({ setSearch }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="SearchInput">
     <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
     <input
        onChange={(e) => {
         
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input} style={{ padding: 5, borderRadius:5}}
        type="text"
      />
        <button
        onClick={searchBtn}
        className={styles.btn} style={{backgroundColor:'#0b5ed7', color:'#fff', padding: 5, borderRadius:5}}
      >
        Search
      </button>
     </form>
    </div>
  );
};

export default  SearchInput;
