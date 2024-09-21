import LoadingIndicator from "@/app/components/loading-indicator/loading-indicator"

const Loading = () : React.JSX.Element => {
  return <LoadingIndicator msg={'Fetching profile details...'} />
}

export default Loading;