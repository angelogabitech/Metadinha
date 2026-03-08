interface Props {
  step: number
}

export default function ProgressBar({ step }: Props) {

  const percent = (step / 4) * 100

  return (
    <div style={{marginBottom:20}}>

      <div
        style={{
          height:8,
          background:"#eee",
          borderRadius:6
        }}
      >

        <div
          style={{
            height:8,
            width:`${percent}%`,
            background:"#2B7FFF",
            borderRadius:6,
            transition:"0.3s"
          }}
        />

      </div>

    </div>
  )
}