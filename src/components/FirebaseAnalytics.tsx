"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getFirebaseAnalytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { trackEvent } from "@/lib/analytics";

export default function FirebaseAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const analytics = getFirebaseAnalytics();
    if (!analytics) return;

    trackEvent("om_page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}