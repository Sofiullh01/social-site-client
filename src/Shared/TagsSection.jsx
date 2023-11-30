import PropTypes from 'prop-types'

const Tag = ({label}) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    #{label}
  </span>
);

const TagsSection = () => {
  const tags = ['React', 'JavaScript', 'Tailwind CSS', 'Web Development', 'UI/UX', 'Node.js',];

  return (
    <div className="my-4">
      <div className="flex flex-wrap justify-center items-center">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
};

Tag.propTypes = {
    label: PropTypes.string
}
export default TagsSection;
