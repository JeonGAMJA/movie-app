const Detail = () => {
  return (
    <div>
      <div className="flex gap-9">
        <div className="flex flex-col w-[300px] overflow-hidden rounded-md">
          <div className="w-full h-[450px] bg-blue-300">Image</div>
          <div className="w-full h-[60px] bg-blue-900">Now Streaming</div>
        </div>
        <div className="flex flex-col gap-3">
          <span>Title (Year)</span>
          <div className="flex gap-3">
            <span>Age</span>
            <span>Genre</span>
          </div>
          <div>Score</div>
          <div className="flex gap-3">
            <button>list</button>
            <button>like</button>
            <button>bookmark</button>
            <button>trailer</button>
          </div>
          <div className="flex flex-col gap-1">
            <span>Overview</span>
            <span>text</span>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <span>creator</span>
              <span>name</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>Series Cast</div>
            <div>
              <div>Card</div>
            </div>
          </div>
          <div>
            <div>
              <span>Current Season</span>
              <span>Original Air Date</span>
            </div>
            <div>
              <div>
                <div>Image</div>
                <div>
                  <div>Season</div>
                  <div>
                    <div>Score</div>
                    <span> year . Eposodes</span>
                  </div>
                  <div>overview</div>
                  <div>
                    <div>calender</div>
                    <span>손톱밑의때가 뭐여</span>
                  </div>
                  <span>(2x9, November 23, 2024)</span>
                  <button>Season Finale</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button>social button</button>
            <button>social button</button>
            <button>social button</button>
            <button>social button</button>
            <button>social button</button>
          </div>
          <span>Facts</span>
          <div>
            <span>Original Name</span>
            <span>name</span>
          </div>
          <div>
            <span>Status</span>
            <span>name</span>
          </div>
          <div>
            <span>Network</span>
            <span>name</span>
          </div>
          <div>
            <span>Type</span>
            <span>name</span>
          </div>
          <div>
            <span>Original Language</span>
            <span>name</span>
          </div>
          <div>
            <span>Keywords</span>
            <div>
              <button>keyword</button>
              <button>keyword</button>
              <button>keyword</button>
              <button>keyword</button>
              <button>keyword</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
