import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { LocalStorageService} from 'angular-2-local-storage'
import 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private http: HttpClient,
  private localStorage: LocalStorageService) { }

  insertUser(Firstname, Lastname, Email, PhoneNo, Address, Password, Username, Birthdate,AcctType):    Observable<string> {
      return Observable.create(observer => {
        const data = {
          'Firstname': Firstname,
          'Lastname': Lastname,
          'Email': Email,
          'PhoneNo': PhoneNo,
          'Passwrd': Password,
          'Address': Address,
          'Username':Username,
          'Birthdate':Birthdate,
          'AcctType': AcctType
        }
        const http = new XMLHttpRequest();
        http.open('POST', 'http://localhost:3000/signup')
        http.setRequestHeader("Content-type", "application/json")
        http.send(JSON.stringify(data))
        http.onload = () => {
          observer.next(http.status)
          observer.complete()
        };
      })
  }
  checkUser(Passwrd, Username):    Observable<string> {
    console.log(Username,Passwrd)
    return Observable.create(observer => {
      const data = {
        'Password': Passwrd,
        'Username': Username,
      }
      console.log(data)
      const http = new XMLHttpRequest();
      http.open('POST', 'http://localhost:3000/signin')
      http.setRequestHeader("Content-type", "application/json")
      http.send(JSON.stringify(data))
      http.onload = () => {
        observer.next(http.response)
        console.log(JSON.parse(http.response).token)
        observer.complete()
        this.localStorage.set("token",JSON.parse(http.response).token)
        this.localStorage.set("type",JSON.parse(http.response).user)
        
      };
    })
}


  getDiscount():    Observable<string> {
      return Observable.create(observer => {
        const http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/getDiscounts')//fix api
        http.setRequestHeader("Content-type", "application/json")
        http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
                http.send()
        http.onload = () => {
          observer.next(http.response)
          observer.complete()
        };
      })
  }
  getRestaurants():    Observable<string> {
    return Observable.create(observer => {
    console.log("service")
      const http = new XMLHttpRequest();
      http.open('GET', 'http://localhost:3000/restaurants')//fix api
      http.setRequestHeader("Content-type", "application/json")
      http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
            http.send()
      http.onload = () => {

        observer.next(http.response)
        observer.complete()
      };
    })
}
getlog():    Observable<string> {
    return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/loggg')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

  getUserInfo():    Observable<string> {
    return Observable.create(observer => {

      const http = new XMLHttpRequest();
      http.open('GET', `http://localhost:3000/userinfo`)//fix api
      http.setRequestHeader("Content-type", "application/json")
      http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
      http.send()
      http.onload = () => {
        observer.next(http.response)
        observer.complete()
      };
    })
}
getMenu(id):    Observable<string> {
  return Observable.create(observer => {

    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/getMenu/${id}`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
getRestByAddr(Address):  Observable<string> {
  return Observable.create(observer => {

    const http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/restaurantaddr')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(Address)
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

addRest(Rname,Hotline,start_at,end_at,cuisine):  Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Rname': Rname,
      'Hotline': Hotline,
      'start_at': start_at,
      'end_at': end_at,
      "Cuisine":cuisine
    }
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/addrest')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
updateRest():  Observable<string> {
  return Observable.create(observer => {

    const http = new XMLHttpRequest();
    http.open('PUT', 'http://localhost:3000/updaterest')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

getPrevOrder():    Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/prevorders`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
getAdmins(type):    Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/users/${type}`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

getOrders():Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/orders`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

deleteOrder(id):Observable<string> {
  return Observable.create(observer => {
    const data = {
      'OrderId': id,
      
    }
    const http = new XMLHttpRequest();
    http.open('DELETE', `http://localhost:3000/deleteorder`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
sendmail(id):Observable<string> {
  return Observable.create(observer => {
    const data = {
      'email': id,
      
    }
    const http = new XMLHttpRequest();
    http.open('POST', `http://localhost:3000/sendmail`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

OrderStatus(status):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Status': status,
      
    }
    const http = new XMLHttpRequest();
    http.open('PUT', `http://localhost:3000/orderStatus`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
updateOrder(status,id):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Status': status,
      'OrderId': id
      
    }
    const http = new XMLHttpRequest();
    http.open('PUT', `http://localhost:3000/update_order`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
//modifies user profile
modify():    Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/modify`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
modifyMenu(menu):    Observable<string> {
  return Observable.create(observer => {
    const data={
      "Hotline":menu.hotline,
      "start_at":menu.Start_at,
      "end_at":menu.End_at,
      "Cuisine":menu.Cuisine
    }
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/modifyMenu`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
deleteRest(id):Observable<string> {
  return Observable.create(observer => {
    const data={
      "RestId":id
     
    }
    const http = new XMLHttpRequest();
    http.open('DELETE', `http://localhost:3000/deleterest`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

createDisc():Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/createdisc`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
editDisc():Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/editDiscount`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

editItem() :Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/editDiscount`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send()
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

reset(username,pass,newpass):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      "Username":username,
      "Password":pass,
      "newPass":newpass 
    }
    const http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/reset`)//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}


inviteStaff(email, first, last, userName, pass):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Firstname': first,
      'Lastname': last,
      'Email': email,
   
      'Passwrd': pass,
    
      'Username':userName,
     
      'AcctType': "s"
    }
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/signup')
    http.setRequestHeader("Content-type", "application/json")
    //http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.status)
      observer.complete()
    };
  })
}
inviteAdmin(email, first, last, userName, pass):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Firstname': first,
      'Lastname': last,
      'Email': email,
   
      'Passwrd': pass,
    
      'Username':userName,
     
      'AcctType': "a"
    }
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/signup')
    http.setRequestHeader("Content-type", "application/json")

    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.status)
      observer.complete()
    };
  })
}

editPass(Password, newPass,Username):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Password': Password,
      'newPass': newPass,
      'Username': Username
    }
    const http = new XMLHttpRequest();
    http.open('PUT', 'http://localhost:3000/reset')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
editUser(Password, Username):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Password': Password,
      'Username': Username
    }
    const http = new XMLHttpRequest();
    http.open('PUT', 'http://localhost:3000/edituser')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
deleteUser(id):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'UserId': id,
    }
    const http = new XMLHttpRequest();
    http.open('PUT', 'http://localhost:3000/deleteuser')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}
insertOrder(id):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'RestId': id,
     
    }
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/insertOrder')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

insertOrderItem(order,comment):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      "ItemId": order.ItemId,
      "MenuId":order.MenuId,
     "commnt":comment,
     "Quantity":order.Quantity
     
    }
    console.log(data,"DATA")
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/orderItem')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

makeOrder(Firstname, Lastname, Email, PhoneNo, Address, Password):    Observable<string> {
  return Observable.create(observer => {
    const data = {
      'Firstname': Firstname,
      'Lastname': Lastname,
      'Email': Email,
      'PhoneNo': PhoneNo,
      'Password': Password,
      'Address': Address
    }

    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/insertOrder')
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(JSON.stringify(data))
    http.onload = () => {
      observer.next(http.status)
      observer.complete()
    };
  })
}


insertMenu(RestId):    Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/insertMenu')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(RestId)
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

insertItem(RestId):    Observable<string> {
  return Observable.create(observer => {
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/insertitem')//fix api
    http.setRequestHeader("Content-type", "application/json")
    http.setRequestHeader("Authorization", "Bearer "+ this.localStorage.get("token"))
    http.send(RestId)
    http.onload = () => {
      observer.next(http.response)
      observer.complete()
    };
  })
}

}
