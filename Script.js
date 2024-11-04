"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

// List of allowed IP addresses
const ALLOWED_IPS = ["103.204.117.21", "65.181.22.132"] // Replace with your allowed IPs

export default function IPRestrictedPage() {
  const [isAllowed, setIsAllowed] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkIpAccess = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json")
        const data = await response.json()
        const userIp = data.ip
        setIsAllowed(ALLOWED_IPS.includes(userIp))
      } catch (error) {
        console.error("Error checking IP access:", error)
        setIsAllowed(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkIpAccess()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Loading</CardTitle>
            <CardDescription>
              Please wait while we verify your access...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  if (!isAllowed) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Access Denied
            </CardTitle>
            <CardDescription>
              Your IP address is not authorized to access this page.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            You have been granted access to the restricted content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is the protected content of your website. Only users with
            allowed IP addresses can see this.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue to Site</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
