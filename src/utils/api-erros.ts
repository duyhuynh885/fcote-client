export function handleApiErrors(response: Response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
