import SearchResult from 'components/molecules/m-searchResult';
import Search from 'components/molecules/m-searchSideBar';
import HomeWrapper from 'hoc/home-wrapper';
import { Link } from 'react-router-dom';

const SearchEvent = () => {
  return (
    <HomeWrapper>
      <section className="min-h-screen bg-bglanding   ">
        <div className="flex justify-between md:gap-x-10">
          <Search />
          <SearchResult />
        </div>
      </section>
      <Link to="/dashboard/event-centers">Go to Event Centers</Link>
    </HomeWrapper>
  );
};

export default SearchEvent;
