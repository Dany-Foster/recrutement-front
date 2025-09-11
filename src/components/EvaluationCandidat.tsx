

const EvaluationCandidat = () => {
  return (
    <EvaluationInfo />
  )
}

export default EvaluationCandidat


export function EvaluationInfo(){
  return (
    <div className="w-[700px] flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
      <div className="w-full flex items-center gap-2">
        <h3 className="text-[14px] font-semibold text-[#000]">Nom et Prénom : </h3>
        <p className="text-[14px] font-normal">RANDRIAMIARISON Jean De Dieu</p>
      </div>
      <div className="w-full flex flex-col justify-start  gap-2">
        <h3 className="text-[14px] font-semibold text-[#000]">Profil : </h3>
        <p className="text-[14px] font-normal">Développeur web passionné avec plus de 4 ans d’expérience dans la conception et le déploiement d’applications web modernes. Spécialisé dans le développement front-end (React, Tailwind CSS) et back-end (Laravel, Node.js, MySQL), avec une bonne maîtrise des API REST et de l’intégration continue. Motivé, rigoureux et toujours curieux des nouvelles technologies, il cherche à contribuer activement à des projets innovants.</p>
      </div>
      <div className="w-full flex items-center  gap-2">
        <h3 className="text-[14px] font-semibold text-[#000]">Poste visé : </h3>
        <p className="text-[14px] font-normal">Développeur</p>
      </div>
      <div className="w-full flex items-center  gap-2">
        <h3 className="text-[14px] font-semibold text-[#000]">Année d"expériences : </h3>
        <p className="text-[14px] font-normal">4 ans</p>
      </div>
      <div>
        
      </div>
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-[14px] font-semibold text-[#000]">Compétences : </h3>
        <ul>
          <li className="ml-2">
            <span className="text-[14px] font-normal">JavaScript, React, Node.js</span>
          </li>
          <li className="ml-2">
            <span className="text-[14px] font-normal">HTML, CSS, Tailwindcss</span>
          </li>
          <li className="ml-2">
            <span className="text-[14px] font-normal">Git, GitHub, Agile</span>
          </li>
          <li className="ml-2">
            <span className="text-[14px] font-normal">PHP, Laravel, Symphony</span>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-[14px] font-semibold text-[#000]">Contact : </h3>
        <ul>
          <li className="ml-2">
            <span className="text-[14px] font-normal">OwB0Z@example.com</span>
          </li>
          <li className="ml-2">
            <span className="text-[14px] font-normal">020 22 504 87</span>
          </li>
        </ul>
      </div>
    </div>
  )
}