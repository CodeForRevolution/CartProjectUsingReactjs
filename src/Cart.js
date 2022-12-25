import React from "react";
import CartItem from "./CartItem";

import "./index.css"


class Cart extends React.Component{


    constructor(){
        super();
        this.state={

        products:[
            {
           price:100,
            qty:1,
           title:"Watch",
            img:'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images-2_600x.png?v=1655198531',
            id:1


            },
            {
           price:100,
            qty:1,
           title:"mobile",
           img:'https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg',
            id:99


            },
            {
           price:35999,
            qty:1,
           title:"Laptop",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeGVyYCn1EPsw_JFPfa-XCGK7FIm_gP-VWCDzHkn8&s',
            id:2

            },
            {
           price:500,
            qty:1,
           title:"Toy car",
            img:'https://m.media-amazon.com/images/I/81KDL-G2nRL._SL1500_.jpg',
            id:3

            },
            {
           price:350,
            qty:1,
           title:"kids cloth",
            img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcWFBQXFxcZHBwZGhkaGRwaIx0gHh0dHSIdHxoaICwjHB4pHh0aJDYlKS0vMzQzHSQ6PjgyQCwyMy8BCwsLDw4PHRISHTIqIioyMjIyNC8yMjIyMjIyMjIyMjIyMjIvMjIyMjIyMjIyMjIyMjIyMi8yMjIvMjIyMjIyMv/AABEIAL8BCAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABAMFAQIGBwj/xABAEAABAgQEAwYDBQYFBQEAAAABAhEAAyExBBJBUSJhcQUGEzKBkUKhsQdSwdHwFCNiguHxFTNDcpJUY6LC0lP/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKREAAgEDBAECBwEBAAAAAAAAAAECAxEhBBIxQVEiYRMycYGRobEFQv/aAAwDAQACEQMRAD8A9mggggAIIIIACCCCAAgjDxmAAggjDwAEERLnpSHUoAbkgQnN7awybz5XotJPsC8NRk+EK6LGCKOb3rwif9TN/tSo/hCau+2G+FMxX8jelY1WnqviLJ3x8nUQRzKO+2FN86eqCfpD0nvJhFWnJHJTp+ohSoVFzF/ganF9lxBFb/jmGdvHl/8AIfW0bf4zhv8AqJW3+Yn84jZLwx7l5LCCK/8AxrDf9RK/5p/ON09qSDadLPRafzg2S8MNyHYIiE9BstPuI3zjce8KzHc3gjEEIDMEEEABBGIzAAQQQQAEEEEABBBBAAQQQQAEEEYeAAgjm+1e9siUcqSJi3ZkkMDzP4B447tDvJiZnmm5EF8qZbpJu4KgLUa8dVLR1ameF7mcqkYnpuIxaJYda0pHMgRQYzvphkOEErVyoP8AkfwBjzxSUr4syiVXKioi+77vGjK+HalS3zFNN47Yf50V8zv+jGVZ9HV4vvrPUD4ctCE6KJz8uQHrFDi+08RNcLnTFDVnAPUJAAB6fWK9ArQsK7cNGPRvWM51jyGuj7NqxYU1NbUjthpqUPlijNzk+WTJlKJq7GrO/wCP6MaIlhqkAdC50r/URvnfzJuaGoJ9fTYfjEiUvRwelx6vesbWIIRLVQO9OY9a6/rSBK1CigRsbewr7xMlCU3pYkGv6o/vGzG3Jq6/Vy8O4ERFiRdmILc6v9PlGiglxQAvYDXUkw1kcUA9x+MGShcNvaC4rChSwL9G501B+cZyF/yt7+0NGXzparv/AEjKUF/16sIQCZluA7/P9PGi5Wj/AK/GH8i9Pp+qCDKsfdH5bP1h3ArVSedv7aN+ulTxVi6ljoSH9jFgZpGg/VPrERxPL9c+TwrIYuntGehss2b0ExX5250hpPebGC09en3VD5pL1bp6QSZgLuD8/o3rGylp3r0F/wBe0Q6cHzFfge5rscw/fbGAVUhf+5AHrRuftDuG7/YhuOXLVXTMKfOOfXPSLpB2JAY2AY7W9jtEWeSovlDDZx+WjFuY3jN6Wi+YopVZ+Ts5P2gffw/qlYN7XEPyu/WHLZpc1P8AKC3sr8I4DwpajRz6n0ANql9YwZNmU1KEhn5gg/rasZS0FB9W+41Wkj1LDd58KssJoSTooFPzNItJGJQsZkLSobpUCPcR4mqWtLhn0oU+1dWepjRU8pCllXhhNmLENVyXcW9oxn/mR/5l+S1XfaPdoI8++yTtlU+ROQxySlhMtSi5IUCohzWhr0Ij0GPJnDZJxOlO6MwQQRIzEEEI9tTFow85UsOtMtZQP4gkkfNoEruwFD233xlylKlyhnmA5X+FJpfVVTpsaxxHbne7EGWQua2Z3QgZQEkGhI4m5XrHPSSFKDlQfKcz3zn4jqXLs1Xjn+08V4kyYs1Sg2DVIcAltACBHuR09Kkli79zm3Sky0T2wu0sKyBmCQEgDarPoP1UR23MTUpXW5KQoE8wk+UA29o5Ofi1qL5vbq/pBJx8xFlk8jX6xEtYk7ZK+Edlhu0ZUxdUpJd0lJUhRP3jlHCkWFNYu5GPQsVXmc0KmB5gHYbmPPkdpoWQJksbZhS+vKGklwSicfLZfEOYBLs/JrRvDUbljP05IlSPQE5FNletRlDjQMFanrEmVFXUGByl0qcWo7dI4RWMnoUQpD2TmlkuA/wpejsxMNSO8bsFLy3SErDBAHoylen5Roq0b2bt9SHTZ2JXLYlwt7VvrprrGicSkWQNNCTS5cXA3tesc9L7SlGolhLu2UtwnzKXl0arGHpcwGqVJUgUyqdJUdEhvhDUoRR41VmTYtk4tJD5OEMHqD/LqbCl+to2TMl/C4q9j9RpvFZ+1FJOaWpOtCCEsHBfQuWtuX0hlGLQU505bfIXUki6Q7WFSWaFYVh5UsbEjl/X+8RJSlrEaUI9fXWExilO1gSlk5i5JIypOhUQCVCyRvEqO0S/GUsBqMtRc8VQjQEitSKQZCwzlpSp6gattGFIU/IXLu9Pl6RGnGg/AXBaju+xG9X1YGNkzAfKdakG5awFlGwuWgAjUFOW3pX0NrCMZ12J2fm+hrU+sTlZ0dhXkX6X1oNrh4wpbAukZbk2am1defvDuFiATzcpS5uNAK6/2/OX9pCdAAa0Bd+rW09YwptKBxQULmvp9bmkQSJjjiKCSHCU1ZNQ/PXQD2hgbrnuGIqXYaMLmuv5RqpmJXSlxqbZWuPTb0iZUoEcKg1jXa4BBpu/QxFPWkIer/CAWJJe17g3al6wXFYhTNeyQRXzOGIcKLFmQNzc2jM5EtbFi7sC5FaFmNdj0EQhQ8yCGo4YkACg4b5QbU4lF4LObg3OZ+qcwevxLIsGEMCMYAguhQKbcNKUFjckAAakmN5EyYk1J2Y6nkLB1UrYJNo2JL5gXDaUAB+IJHlcUQL1JgViOEMUly2Usw/m2Ap1JrABiZjx8QZNQA3CwuS9+kU06arEEhCWlu5G5DEGumsSdoTBMVkZkC4Gg9rPoYBMSEEqOXMQkkCoBuwe4SCQOUS2Wkey9xeykSMJLKSCZoE5RGpWkM3IJYR0kUHdrtzCzpaJeHmAZEJAlK4VJSBlHCatS9YvxHzNTc5Ny5O2PBmCCCIGYEazGYvZq9I2hPtdJMiaE1UZawBzyloaywZ4n23Lk+OpeCBTLSQ2Ykg8WYlD+VN26ekcZPleHNmJWOFTgKAo+9L3jpcPMGUFmFze2gb8I1x2BTMDqYqajtajUoAWfWPonR9Ks+DlUs5ORnYTKQlQY/eehc0LWERHBK9qbxeHCLQClQC0uWSxfT0Fwb7RFllt5VgsKV3sMw31rHNLTRfKL+IyqRgTG/7IoUBI163/AKxapXK++bl3Zqas1AG/vGQuT94kEB6pD/w7gmp6RSowXaDdJlbLXNR5Vba6D8IlVj10C5YLE6Xeml4dV4V893Duj1L/AHdA0ZCpX3lAEbpokG/JR32itniQr+xX/tEv/wDNSKEEpLOejsfXeGUY9nImVYNmSUkCtstCfT3hhIlkguoVCjVJqaJT9H1jT9lQTxKzVbiFyQ+UaJDfqkNRkspr+BddjkjtdYDDiALAPmFRckc9T0hxGNlzOJYYarAHEoGjBmuHo3sIov8ADEO6VgkeYpU1TYJF3dtREapc1Bc3AzEkCm9Ry3/GKVScfmRLjF8HVVDspS6OAkBawCXJ41XVYt1DwSpwUSUqQ7gqSsqTlINVFOgAYC4cuxjm8N2gpLfC9bl17VJtTSLaVOlr/wAwHNolJaiquouzFg41s142jNS4IcWiyQpRyhIWUlmSoZSHfhCk0UpVHdtaxOmadgfhDFwpQc5Q9paaZiNtYrUTJgLqVnTxcaLpe5r5iAwqXrcxsnEBQzlQAAfK5oiyUADM+Y1el7mLFYsvHCX4q0USBobL+6KjhSKVqIEYq5yg1o2Ykk1CSCP8wh3LlhtCaVMWKQVAglCSCFLZwgE/Ci/6MaOzV3INhQ8agb7pAZJ5wCsWRXUOHuAkEV3qoAhA1L1tESyGKnSDcKdmA+M6JFwlLH8khMIcFKWYEpCagOQiWQom+uWt3gnTgONawFE1agUoB6pUDwpDu2vvAMbHaKgaoKm0S2avlBBoVsHOidtY0xOKExPAp+JiHCXVoLmmpUL9Hhdc1Ch5uGpCleU2Bmaso2T9I0KKu4YUNyUoV8ANipRqbQgsN4aapThZT94KfzkUOxyJow1+ZllJIDeZmHhmhJ0SwHCmyiavraK1GIIJIKXGUgNb7qMpo4qXf6Q7h+cx12qXBqOEq2FSRcu0CYmbS1JDkLL3UN3pmS44lKNAbJFYWxK8rqKACoMEkvkAZspBs93AJe9nkxM8OFnMACXH3qf5hFGTYAPQDaKxLzCVlTaigYs999PcwNgjMmrA0Lv1Bc5X0/XKDFq4wLJAq9Kk612y6HWMrWAKgnU67MNXFjrZogSkguaEu5s56B1GFcYwVKQUlJIIqkjhKeYNC+vCI9K+zvvWucpWGxK8yxVCyKqFXSrYijPUjpHmWerO24bL/wCKXWz7kR0X2ey1f4hKCXSAFqIYM2U0yg8NTc1jk1cIzpNtZRrTbTPboIzBHhHSEYMZjSYWBOwJgA8T+0TCSMNiT4KlKK+OZKApLeoUDzJfIa1ihwuNQsOguToAxcG1Bw0rzifFzlzZs2YsuVrUak7nlVmA5MIrZvZ6VHMglCm8yTcudqaW5R9HShOEFm+DkbTZaggjiAKU3oX0tdqtEE1IAJBIarO4L/Xk5pFcMTMllpiQsM2cB6fxJavpDaJyVh0kF3qLj+X9WjXcmK1hCZjmLKlpW2rAnYkuOm8RIx8gnilBL0cp5uLWiafKBFCKaa/O2/tCCsKTbXlbrHPUungtWHQZBAPhjejV5a0AjU/s/wBwg8kj/kzUA/C8VZlKSxS43b8rf2MTJxJ+MOK8SeVKg6RKn5X6KsOn9mpUB3NUuTZw/wCESS5MgkBExKW1cpNdSQQ3QQtJloWKZSq7G9bXrcj2ESK7PB8wJGheos9LEc/cRazlJC+5KezSAGUTlchNFVq5NA1NzWNUS5iBdwCx1zquPNQgbgxEnBMeFeU+ZLFhdhqxF6uNKVhyUicGHiB82U50g2uyjtU05Q0vYQrPCVkhQyr4cx+EbJY2q0KzETJfJNg+p1y6ir+kWMxIIaYjw1EgB3VmIrWrofb0iFYUhRExPCrcWDA0TYVreCUVyBvg+0SAwLJexF+RfS+1xD4mqH7yWQ5bgmcTMGDKuABX3ijmSahSDmepU3qB8vR4kwmMKWKSxHxbVdjvf1gjUfDE49oukzjlrnSCKMpSsoPnWrN5nNB0g8a4OUAMcurJomWQbpo9NrGFFihWgKUK+KjTdwKUevL3ECVqISQotxGp3BJLUsS9rbtF7rE2HULUpaZaE5phVkSlAzFS1FwqWSQwAfkGNo9S7vYSRgkeCwnT1KCZ5p5ikqCePzA1AAup9TFb9mfZMtMtOKWoKmTApMpJ+BAUQQH+IqBrcBhHV9tYeWtKQooTMUSEFTAroXQ93Zz6R5Os1W57Y8L9nRThbLKvtbutg5ozJliUogEKlgDpml2LbfjHnXbXZszCzEJmKcO0uZ8KyQ5WfurFspe4Dx3vaPZ0yUcyJivMCE0loFKqmFAfKAkMlADm7uYjnS5eNkmVMFJgdKmAZWik7Ma3qIxo62VJpSd03b6CnBM8wxAKGUkkUUC98pNSTcrIpvSHZU8KQA7KAuAAdXQkUaoqQz+kQJQtKpkqdmMyWohWrGoKhrUW5EREopQgpQpwDlsQ9XqDzLA7pj3E+0c7RtipmdTPSlatTTlz2rvGVBruHF2Djbo9L8o1kDhL2NTf9Vs8azp2V1LPCOI/+oAu+m1Iq/bCxFiplQ9DqxIcnRk8RobRpnYbvQgcALFgSA6nrqRCE3HpLslRJ9H/AKe8YQuYu3AOWnqYydRN4LUSwJVYOxoyXDk8k1V6mPXfs57sKw6TiJqcsyYlkoZsiCxZQ+8WHSPKe7+Im4WambKU6tljOFDUEHfcWj3vu92ujFyETkBszhSSQSlQLFJbn8mjh1tSoo2thmlNK5bQQQR5ZsZjBghTtPGCTKmTVAkIQpZAr5QT+ECy7AeO98OxFYTELJQfCmFSpSwaAmpQdlX9gdIoM5Ar9QD0vV7xZ9t43EYwEz5hIUXEtJ4Adkpe43Mc2ZcyWzDxBdjQ8yDq1Lx9JS3xglPn2ON2bwWyEu+oqNXpcEbgvWEZmBBWcoKVaEbkm+73rvzjSVj0K4VX+6rMPR9fpyh1CnDENc3oH21HpWpqY0xIXAgrxJb5+JIYZxcaVSX2HtEeZC6pLvdjZmqH5iGpgL2OYVDtTTpvrqKQrOwyVOQGOtMqrexq1tDGcl4KRk4Z1PrT02Ytu1LREvDvVq6M92ax6abxslMxHlOcGjKNQ/N66/nG6MQk3GU2ILjVhrX52hWTGJKwrmgZrac3fTl/SNpS5iKBTh7LtTnpRx7xZ5OFgRfWwaoDFuYjCsOHcggD6ci2zXpQwfDtlDuayMalYqjio6FDr5S4NfK2kOBSU+eoAWlIQLAu5ukkgP8AOKybhgtQd0qGo5FiQ1Lu3TV4YlJmAAJY6HMKlJvUFtSeoi437EyTEHOMtCDkZAGY8kqUElIBDlr05RXFQQQhYAQoApzF1IJ+GlW9NIZxyyFKS5RxZmTUrBuCRUVSeXFEGMNCnKmUFE65idgWo1B7RFS/I0QkmWooUrMg2y1avK1IhxCChWZCQAQAz3q3z+TRvJUFoMsqcJqlTX5PyjEoBQKFA0JbmPrGWGPgnkT1BQYliWFqtQpVzBhybkCRMCR4ZLFL1QRa/wAJP1inKsqilYYK0HwmwUBoRQ+8P4PEqlrLsVMx2Wk615RUZ39LFKPaO87hdrAIOCmFlBSpklZZlZqqQ++Z1DdzHVI7RUAZc9ImpdsqgHHRX0jyVUpIHCppZUCg6hQHyY1FtI6vsjvK5ErGllCiZzFjsJnM3zDerR52q0sovdE0hUxZnceOESypClTJIBzJLqmSwWt95IqS9YpZcpElaVpUUyiQCoDO6lFJQvMCCUlLmpLcQArDCSuWRMSXFwbgjrqDDHak6TKw4neWWlKsyQcpVnJPhgg+Yrp0ePPcN3pfeDV2OQ7+SUnFInSlo8SagZ0ioZHCJh3cApD/AHX68mtZKgCG0LetxzN9r6RNjMata1zC2ddwPKkUZKRoEgD25wpKSyaPodTdnJIDgkfjvH0NGLp04xZyyy7jXiOAwtRn+Ko/BuesL4tAUAl6XL0+dtqbARIhT3PQ/wAJYO4+8xHo8SeHTUPV/KPdVW1DCNrXRIrJwYpS5b9fLSG5chmbaj0foKn1pEyENe3ql/8A2VTZhGUk1AYA3bhFNSLn1MCikJsykMLbOC+zu3/0Y9S+y7DFOFXMPlmrKkhtAkJfpRqUpHFd1OwpWLmJTOny0pFUywpOeY1SEpuEtcs8e0SJKUJCUAJSkAACwA0jzNfXT9CN6UeyWCMwR5hsYhTtPCJnSpkpThMxCkEi7KSUludYbim71zJicHPVJfOEFmuB8RH8QTmI5tDjfckhPg8axmHMqZMlqWlWQ5CtJcEA6bG77EGNaKdwrQAW+Z157bQlPw4XxIWQ4LZdnar3LmIVT5kstMTnAsoMD1y2JttaPp43SycRNi+zwuikvzFQejBz1ivmYWZLcIJKdUrLj0V8ouMPiUL8iqXO51qPrEqiDd07sxBPMH2pDcUxptFJLx6SWmDIf4rdHHQXhk1AcAjQVII1YixevrE+OwaWZqN9Ddv0amKz9mWg/u1ZQfhNR7aejRDTXOR3TGFo3LbHYXIbmHO1NTGqsOCGKU00dmoGIJ1v7REjHAFljIQfMKj52OtfxhtKA1zla40DDQHywlkYt4CkVQsh24VF9Wyh6ja2ojYYhILLTlNuIU3uzVH1idmo4c3AZjr1q3Wp6wITYEONmds2pffS4qkaQ89ARzllSbqY0JOwc3YkmlK66xLgACFpDAuCEtsSSGLOwFqNCq8G3+WrIaAofMCphRi3OFTjpiCMyaUqLM9C214TnteQtfgscZLUVgJCmoKqpZwSRxPmB+cIqBY1SkgVypzF63OhAe+8RTu1pZLlBUoCg0ffm53rFfN7TWqzJHR/rHPUrwXZagxvwy+Z2IsTRm1AFI0xfE0xJJ3aws9fWKxcxSvMomGez5+U5VeVdD9IwjWUna2C3FocU0xIUls1QdWtqbUiLCqCmQ9boVqC/lP19Y1BMpbUyn1o5+YjfFS8p8QM1GrrcGmkW332uRexYYPFBilSQoEcSDXVsydD7aRYqIBCFFJQWCZjOS+ihVzQC9Hikl/vBoFp2G5Gxqk1B5w12fjXCpZACSSJgJr1EdFOpfD+xnKNi+wGPxGFpLU6HYylupAJD5f+2AKU3jPbPa0yflJT4cpJzIl5rLIrMej6gUZoQTiG/dqdTgBMzRiQ5YVINDyMaYyakqCAaAPcMWoKnRRbXeD4NNS3WyLdLgWSTmJZ2YKd2Yn5F6vs0TZXPETXzF6sbAKF7t0eMSZRAKqg1Ln4S1c3LhG92jAmoAK1HKkVAJ8ynYKAu7NTlFrGWA0kNV2N+EAA2+I0HpuYwSEupZCRua/+Srem0Vk7tV6S0csyvy/OFTLVMLrWVG4egHpaJdTqIbPI/O7WSD+7QVm2Yktp6q0hNZmTHzKLXyiifbpu8MSsODYVq4IAZuZpf6xLJl1pVqUAIruTTaEoyfzMeFwZw0g0UCpBAotJLhrZSGcvszR7H9m/eSZipa5U+s2UEHNqpKnAKjYqdJrrQx5GmWwU4vR7+hUqpHtHqP2UdnKQibPUkpRNyJQ4ZwjMCQNEkmm7RzayMfhXfPRdNu56LBBBHjm5iE+0sYiTKXNWWShJUfQW6m0ORVd5uz1YjCzZSCApSeF7OCCAeRIaHGzkr8CfB4b2l2uFz5i/DCELVmyoFE1HufipckxIFJWMwU4P1ozCEiggqTMTlUglKwRRwVAgg6Aga6CFVS8lZamNa+5bKddLaCPpY+lJLg5BvEYBKqgZVbg/iP7GI/2iZLBzpzgGpAY200p+MYk44BgsAUAzM4J6Pwh2HpFinKr4hZnFc2tBZ/z9YtWfBJBhsahdErL14SANNtQ7xuqW+lbDpTrTSIZ2ASocwaGtNmL9Pa8LqXNl7LTsoHNrQEX3rBd9gTTcKDo4chqCvP8AWkVv7MuWXlqKC9hYtq3t7xa4bHJVwvlU3lIZrGmhaJJqN1N1rv8AL+0S4qWRptFKMaRRaMv8SXIfcgVAcCLLCgZQwBDFgGa4IAalgI2n4Po3R6X9L/WEJUqYgnIxTVwbO5dj8JpEpOLzkq9xxa2JIUW1YhrFzU3DmhepvRoypAWGahYMK3G9ks7k3rCfiEuCgIUyteFXCRcdHY7m8OyqJC7pJLg7By52oyXFG3DAUrMGVPaGAALtStbP0epD2POKyZhwP0fqY6fGKdg5qASJaDVwySVmrPaK3EymuwJ6rLelBGFSlF9DjIphL0b8YwpH6P5Q8uSdlGj3A60vpGEyrB0pcu11fL3jndM03G8tXioyKfMmr0qz7/OI8JMY+GtIcWB32Oh5RPLw7EK4nFio2NbJF/lGcVhs1WZV6CpAFOh9ItwlZNcr9iuuBRIKFuVZS5bYB300Nm5vE6pef95LUyk/CTxEdNSx9ojC84yrZK0uz/Q87xqhSkKBqFuHc3DMS+1olWX0/gywl4tJSBubK0IuG1ezdIbkynVctQcxRyCLszEG1TvECJ8qZZIC0uQtiOuZNz6RYeIhKXzByKAvVqULONOkdUc9mTwQTgSoIagqqzEbb7k+kVs8Z1uRRIZI5fgTV33h3EUQSo8SzxPS9WoNqRCo8NaCzqDClKJup3PvBNXwUiOXJbYsGd7UNzyfrSN8hcENxUc0B4gwa6qGJUpJAJuauRXKQDRJ4UNW+gh3svATZ68kiWqYujhFW2JmKYJHtR6xOIq4ZFfCsKtoCKipsmwq/m5Ra9k9kzsWvJh5ZmMWUtwEJN2VMsltkh7UjvOwPs1SGXjFZ3qZMssh/wCJdFL+Q3ePQ8Lh0S0hEtCUJTQJSAAOgEcVbXKOIZ/hcafk4rsH7OZEspmYk+PMFQlmQk8k3UeavYR3CEgBgGAsI3gjzp1JTd5O5qopcGYIIIgYQQQQAcb3j7iScSpUyWpUmcSVFSXKVK3Ulw9diI8z7f7u4rCn97LUUazZbqQebhvDpooDrHvsaKQCGIcHQx1UdZUp45REoJnzUnKQLB9aKfmkaP8AiYj8IofIrKq4KahRbbpX9PHsPeH7O5M3MvCkYeYakAEoUeaPhJ3S3Qx5h2x2RNwivDxMsyyWCVAuhbO2RTMWpQsQKtHp0dTCp3kxcHHkXl9oVaYMrtxCo5uDQDT1h5SAWZjS/OzuL7NFfMTQEm5Gl6kksfLodvwgS6OKWojVg5FOXzcc46tzXJFvA3OwiVC3MUbX72j+8Qy1TEeU5x91VSByVV9bvE0vtIOnxOClwxSSOejB/wA4byA6Vd2u9mL67V5iGrPgXBFhsSlVjlJPlWz32sRf+hjVYCalmcEEku7gkEaDq/Ml42xGECgSUh6ga15VoXD70hMzJkvXxBVwbjchTctYbdhjOJwYKLbOb1oBZyGP0MLYWapX7ohzUpUS9Q5BLNsKfxNR4Yk9oSl0PCSWAX6i9jr7iMzU5FZqhkqSK8XEwLHpV6kMYWHlAvcgUrMpbLWtKqpoAK14WokByGejQvlFWKQ4+EZjoL/q0ToLkCzA8JoxoHIToza7xjETkofMoDqw+Q+kRL3DsXXJDWJ1GdRf/iNW05xhMvQbD+H1YObQtO7VQPKkqO9h+ZhJeNmLJAOV9Ej8YwlUhHjJaiy2VMly7qA5C55EXPrCM7tLNRKKOKk16MKAfnCSJXu/U+w/VYkQjTX3PtpSM/iSfGCtqHwETK2JFWYVf23rGDhyQywSW4SBWmjhh+cQy1qTQEh2BAueTaC3vE2dZopR/wBoqojba5EaJp88isRnBfTS7sw/OLLs/CAqDUyg50KBJBpVJsT73iFIymrukWBJLa51Ow6fOJ0TVOAVk8QCUhLqLggJFHUSpusaRUVkl3M45TroQGFGDq97IHM7RphsOtcxKZUtUyaaAJeYfSjnrRI1Mdx3e+zvETmViT+zyzXIGK1VfytlQKmpc8hHp/YvYWHwiMsiWEvdV1K5qUamOWtrIRfpy/0XCDPPe7n2arWy8Yrw01PgyyMxf76xQdE+8ek9m9mScPLEuRLTLQNEhn5k3J5mHIzHl1K06j9TNlFLgzBBBGYwggggAIIIIACCCCAAggggAIXxeFlzUFE1CVoVQpUAQfQwxBAB5d3j+zMgFeBXqD4EwhqfCiYQ6RyU/UR51jMPMlzFImS1y5gYrlqcHhbiFSCOYLV0vH0rFZ2x2Hh8UjJPlJWBYkMpP+1Qqn0jto62cMSyv2ZygnwfPCkBjYi1A4e9WF2o/LS5jlhUusssDUpuCN2vUPb5x3XeD7O8Rh3XhiqfKFcn+ompNgwmX0Y8jHGWNiCDUeUgljYMU1FRo56x6lKrCorxZjJNcjWG7QQpweFRdg/CTyNgesNzEAs5NmLVJtUnfo94qFyhQO4Z2bMNi5LuBmSf5fWN8LiJiCQlimxSSXHQl2pUCzMxjZS6ZLXgmxuCCnSz+gcdfbTeFkYlcoFBdaBW9Q+gJuk/raLDDYpEwcDhVykuCKXpWo1vBjZFCACQpJrWrfIPUVb8IbinlCu+ykxXaSi4QCkKuo1NdBt1L+kVPg60vrU0LRbzZdWSkkauwuavzv6pMLlLuA6jskMBQfFHJUi28msWIolc26lucSKTRyKUoaDmADUmJWAo4cMWTU7u9eXzjcS2NSEfxTGdjsnpGW2xZGlL2c0vUJDVPMxJLlA2dQsyRlG/mPqPSJUSiTXMaUKzlFaVTycU1eN1pGtW0U4CRuJb9TW8VGIjRCBYMTWiDetXWbNSGJICUglgCQwS4GtM3mV8rx0Pd/uhjMW2SWZUoj/MmjKn0QKrL+nOPVO7ncbC4VlEeNNH+pMALH+FNk/M84ipqadP3YKLZ5v3b7i4vFMpaf2eTcKWGUX+5KHLVfzj1Pu73SwuDH7pDr1mr4ln10HINHQQR59XU1KnPHg0UUjMEEEYFBBBBAAQQQQAEEEEABBBBAAQQQQAEEEEABBBBAAQQQQAaxz/AHh7o4XGcUxGWYAyZqaKHXRQ5KeOhghxlKLumJq54X3j7mYrCHxG8aUl/wB5LBBS5utA8oGrOLmkc4CFEgkZS1Rw6AhlaCu6ukfS8cd3j7g4bEkzJbyJ188ugUf40WV1DHnHo0df1P8AJm6fg8WQi5LZt00NT5q1FRrcNDSsUpaSlZBYXCikqrUn7ppUHYRYdud3cTgi89HAKCbLGZBcksX8g6gVNzFZLT53cpKE+UOpiSSAmrsOQaptHpwnGSvF3Rk4+ROeASXTqbnKEpICmJ1cEn+aIMhVfMsUYJGRNARcmovXrDCktmJrXhKmOVGUEFh5qZR0jRaXygOsqoA2ck6hKB6Wc0jOayNMjQKMGDB2l1Jfcm1/nGrBJegJNS4Uq+qjQF9nvaO27E+zzGYhjNAw8u5KxxF9pQNL/EfQx6V3f7lYTCMpKTMmj/UmcR/lHlT6COOrqKcOMv2NFFs8n7u9xcXi2WEeDLNfEm5nL6pSWUoN/tFqx6f3e+z/AAmFZak+PNFfEmBwDulFknnU847CCOGpqZzxwvYtRSACMwQRgUEEEEABBBBAAQQQQAEEEEABBBBAAQQQQAEEEEABBBBAAQQQQAEEEEABBBBAAQQQQARrQCCCAQbg1f0jiu2fs2wk0lcoqw6y5/dsUF7/ALtVB/KUx3EEVCcoO8XYTSfJ5phfsqQFlUzFLIJFJaEpLAMBmVmYMBp6x2fY3dzC4UfuJSUqIYrPEpXVanUffSLeMxU61SfzMFFLgzBBBGYwggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIAP/2Q==',
            id:4

            },
            {
           price:150,
            qty:1,
           title:"multivitamin",
            img:'https://m.media-amazon.com/images/I/61BAYp++CtL._SL1080_.jpg',
            id:5

            },
            {
           price:150000,
            qty:1,
           title:"Refrigrator",
            img:'https://mobileimages.lowes.com/productimages/853115a6-4ede-4e48-a5bd-35906d10f100/05480265.jpg?size=pdhism',
            id:6

            },

        ]
            
        }
    }

//  increaseQuantity(){

    
//     this.state.qty=this.state.qty+1;
//     console.log("increase quantity called",this.state);
//    this.setState({
//     qty:this.state.qty
//    })
    
//  }
//  decreaseQuantity(){
//     if(this.state.qty==1){
//        return; 
//     }
   
    
//     this.setState((prevstate)=>{
//         return{
//             qty:prevstate.qty-1
//         }
//     });
//  }
   
handleIncreaseQuantity=(product)=>{
    console.log("increase quantity called",product);
    const {products}=this.state;
    const index=products.indexOf(product);
    console.log(index);
    products[index].qty+=1;
    this.setState({
        products:products
    })

    
}
handleDecreaseQuantity=(product)=>{
    console.log("Decrease quantity called",product);
    const {products}=this.state;
    const index=products.indexOf(product);
    console.log(index);
    if(products[index].qty<1){
        return ;
    }
    products[index].qty-=1;
    this.setState({
        products:products
    })
}
   
handleDelete=(id)=>{
    console.log("delete is called",id);
    const {products}=this.state;
    const items=products.filter((item)=>item.id!==id)
    this.setState({
        products:items
    })
}
    render(){
        const {products}=this.state
     return(
            <div className="cart">  
        <p>this is para from cart</p> 
      {
        products.map((product=>{
            return<CartItem 
            product={product}
             key={product.id} 
             increaseQuantity={this.handleIncreaseQuantity}
             decreaseQuantity={this.handleDecreaseQuantity}
             delete={this.handleDelete}
            />
        }))
      }
                  </div>


        )
    }

}


export default Cart;
