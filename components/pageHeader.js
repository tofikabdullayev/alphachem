const PageHeader = ({ title }) => (
  <div id="mu-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-page-header-area">
            <h1 className="mu-page-header-title">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default PageHeader;
