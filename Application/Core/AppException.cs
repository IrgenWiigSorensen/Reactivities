namespace Application.Core
{
    public class AppException
    {
        public AppException(int statuscode, string message, string details = null)
        {
            StatusCode = statuscode;
            Message = message;
            Details = details;
        }

        public int StatusCode { get; set;}
        public string Message { get; set;}
        public string Details { get; set;}
    }
}