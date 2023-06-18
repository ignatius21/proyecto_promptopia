import PromptCard from "./PromptCard"


const Profile = ({
  name,
  des,
  data,
  handleEdit,
  handleDelete
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left"><span className="blue_gradient">{name} Profile</span></h1>
      <p className="text-left desc">{des}</p>
      <div className="mt-10 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleEdit={()=> handleEdit && handleEdit(post)} handleDelete={()=> handleDelete && handleDelete(post)}/>
      ))}
    </div>
    </section>
  )
}

export default Profile