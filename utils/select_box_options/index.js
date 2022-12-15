const todoOptions = {
    leadTypes: ['meetings', 'calls', 'email', 'sales', 'acquisition'],
    meetings: [
        "followed_up",
        "meeting_(done)",
        "video_meeting",
        "walk_in",
        "meeting_(arranged)",
        "meeting_pushed",
        "meeting_(attempt)"
    ],
    calls: [
        "sms",
        "contacted_client",
        "call_attempt",
        "followed_up"
    ],
    email: [
        "contacted_client",
        "followed_up"
    ],
    sales: [
        "followed_up",
        "token_received",
        "partial_down_payment",
        "down_payment",
        "booking_form",
        "sale_agreement",
        "closed_(won)",
        "closed_(lost)",
        "contract_cancelled"
    ],
    acquisition: [
        "verification",
        "commission"
    ]
}

export { todoOptions }