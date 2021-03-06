const CategoryItem = props => {
  let className = (props.selected)? "pure-menu-item cat-item-selected" : "pure-menu-item"
    return (
        <li className={className}>
        <a className="pure-menu-link" onClick={props.onSelect}>
        {props.name} <span className="blog-count">({props.count})</span>
        </a>
      </li>
    );
  };
  
  export default CategoryItem;
  